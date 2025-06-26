<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\ConductoresRepositoryInterface;

class ConductoresController extends Controller
{
    protected ConductoresRepositoryInterface $conductoresRepository;
    protected Request $request;

    public function __construct(ConductoresRepositoryInterface $conductoresRepository, Request $request)
    {
        $this->conductoresRepository = $conductoresRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->conductoresRepository->findAll($this->request->all());

        $fileType = request()->query('filetype');
        if($fileType && $fileType == 'csv') {
            header("Content-type: text/csv");
            header("Cache-Control: no-store, no-cache");
            header('Content-Disposition: attachment; filename="conductores.csv"');
            $rows = $payload['rows'];
            $fields = array('id','id_conductor','id_taxista','nombre','apellidos','tel','dni','licencia_conducir',

        'f_entrada','f_salida','fecha_nacimiento',);

            $f = fopen('php://output', 'w');

            fputcsv($f, $fields);

            foreach($rows as $row)
                {
                    fputcsv($f, array($row['id'],$row['id_conductor'],$row['id_taxista'],$row['nombre'],$row['apellidos'],$row['tel'],$row['dni'],$row['licencia_conducir'],

        $row['f_entrada'],$row['f_salida'],$row['fecha_nacimiento'],));
                }

            fclose($f);

        } else {
            return response()->json($payload);
        }
    }

    public function count()
    {
        $payload = $this->conductoresRepository->findAll($this->request->all());

        $countPayload = ['count' => $payload['count']];
        return response()->json($countPayload);
    }

    public function show($id)
    {
        $payload = $this->conductoresRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->conductoresRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->conductoresRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->conductoresRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->conductoresRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

