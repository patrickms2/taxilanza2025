<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\ControlfichajeRepositoryInterface;

class ControlfichajeController extends Controller
{
    protected ControlfichajeRepositoryInterface $controlfichajeRepository;
    protected Request $request;

    public function __construct(ControlfichajeRepositoryInterface $controlfichajeRepository, Request $request)
    {
        $this->controlfichajeRepository = $controlfichajeRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->controlfichajeRepository->findAll($this->request->all());

        $fileType = request()->query('filetype');
        if($fileType && $fileType == 'csv') {
            header("Content-type: text/csv");
            header("Cache-Control: no-store, no-cache");
            header('Content-Disposition: attachment; filename="controlfichaje.csv"');
            $rows = $payload['rows'];
            $fields = array('id','id_asistencia','id_usuario','id_taxi','hora_inicio','hora_fin',
        'ubicacion_inicio','ubicacion_fin',
        'horas_trabajadas',

        'fecha',);

            $f = fopen('php://output', 'w');

            fputcsv($f, $fields);

            foreach($rows as $row)
                {
                    fputcsv($f, array($row['id'],$row['id_asistencia'],$row['id_usuario'],$row['id_taxi'],$row['hora_inicio'],$row['hora_fin'],
        $row['ubicacion_inicio'],$row['ubicacion_fin'],
        $row['horas_trabajadas'],

        $row['fecha'],));
                }

            fclose($f);

        } else {
            return response()->json($payload);
        }
    }

    public function count()
    {
        $payload = $this->controlfichajeRepository->findAll($this->request->all());

        $countPayload = ['count' => $payload['count']];
        return response()->json($countPayload);
    }

    public function show($id)
    {
        $payload = $this->controlfichajeRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->controlfichajeRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->controlfichajeRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->controlfichajeRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->controlfichajeRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

