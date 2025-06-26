<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\TaxistasRepositoryInterface;

class TaxistasController extends Controller
{
    protected TaxistasRepositoryInterface $taxistasRepository;
    protected Request $request;

    public function __construct(TaxistasRepositoryInterface $taxistasRepository, Request $request)
    {
        $this->taxistasRepository = $taxistasRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->taxistasRepository->findAll($this->request->all());

        $fileType = request()->query('filetype');
        if($fileType && $fileType == 'csv') {
            header("Content-type: text/csv");
            header("Cache-Control: no-store, no-cache");
            header('Content-Disposition: attachment; filename="taxistas.csv"');
            $rows = $payload['rows'];
            $fields = array('id','id_taxista','id_user','licencia_conducir','apellidos','dni','direccion','telefono',

      'fecha_registro',
        );

            $f = fopen('php://output', 'w');

            fputcsv($f, $fields);

            foreach($rows as $row)
                {
                    fputcsv($f, array($row['id'],$row['id_taxista'],$row['id_user'],$row['licencia_conducir'],$row['apellidos'],$row['dni'],$row['direccion'],$row['telefono'],

      $row['fecha_registro'],
        ));
                }

            fclose($f);

        } else {
            return response()->json($payload);
        }
    }

    public function count()
    {
        $payload = $this->taxistasRepository->findAll($this->request->all());

        $countPayload = ['count' => $payload['count']];
        return response()->json($countPayload);
    }

    public function show($id)
    {
        $payload = $this->taxistasRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->taxistasRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->taxistasRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->taxistasRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->taxistasRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

